/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from 'react'
import { StackHolderFormType, StakHolderData } from '../../../utils/types'
import { data } from '../../../utils/constant'
import DataTable from '../../../components/molecules/DataTable'
import Search from '../../../../public/assets/Icons/Search.svg'
import { MRT_ColumnDef } from 'material-react-table'
import { Stack, MenuItemProps } from '@mui/material'
import Typography from '../../../components/atoms/Typography'
import Button from '../../../components/atoms/Button'
import Icon from '../../../components/atoms/Icon'
import DownloadIcon from '../../../../public/assets/Icons/DownloadIcon.svg'
import DownArrow from '../../../../public/assets/Icons/DownArrowWhite.svg'
import FilterIcon from '../../../../public/assets/Icons/FilterIcon.svg'
import theme from '../../../theme'
import AddStackHolderForm from '../StackHolderForm'
import TextField from '../../../components/atoms/TextField'
import MoreIcon from '../../../../public/assets/Icons/More.svg'
import DropdownButton, { ChildElementTpe } from '../DropdownButton'

type EditStackHolder = (data: StakHolderData) => void

const getStackHolderColumnDefination = (
  editStackHolder: EditStackHolder
): MRT_ColumnDef[] => {
  const columnDefination: MRT_ColumnDef<StakHolderData>[] = [
    {
      accessorKey: 'name',
      header: 'STAKEHOLDER',
      accessorFn: (data) => `${data.firstName} ${data.lastName}`,
    },
    {
      accessorKey: 'portfolioEmail',
      header: 'PORTFOLIO EMAIL',
    },
    {
      accessorKey: 'contactEmail',
      header: 'CONTACT EMAIL',
    },
    {
      accessorKey: 'relationship',
      header: 'RELATIONSHIP',
      accessorFn: (data) => data.relationship ?? '-',
    },
    {
      accessorKey: 'costCenter',
      header: 'COST CENTER',
      accessorFn: (data) => data.costCenter ?? '-',
    },
    {
      accessorKey: 'ownerShip',
      header: 'OWNERSHIP',
      accessorFn: (data) => (data.ownerShip ? `${data.ownerShip} %` : '-'),
    },
    {
      id: 'action',
      header: '',
      Cell: ({ row }) => {
        const actions: Array<{
          label: string
          onClick?: () => void
          MenuItemProps?: MenuItemProps
        }> = [
          {
            label: 'View stakeholder',
          },
          {
            label: 'Edit stakeholder',
            onClick: () => {
              console.log(row.original)
              editStackHolder(row.original)
            },
          },
          {
            label: 'Delete stakeholder',
          },
        ]
        return (
          <DropdownButton
            parentElement={
              <Icon src={MoreIcon} alt="More" boxProps={{ mt: 2 }} />
            }
            menuProps={{
              anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
              transformOrigin: {
                vertical: 'top',
                horizontal: 'right',
              },
              PaperProps: {
                sx: {
                  mr: 1000,
                },
              },
            }}
            childElement={actions.map(({ onClick, label, MenuItemProps }) => ({
              element: (
                <Typography variant="b3" onClick={onClick}>
                  {label}
                </Typography>
              ),
              MenuItemProps: {
                ...MenuItemProps,
                onClick: onClick,
              },
            }))}
          />
        )
      },
    },
  ]
  return columnDefination as MRT_ColumnDef[]
}

const AllStackHolder = (): React.ReactNode => {
  const [stackholders, setStackholders] = useState<StakHolderData[]>(data)

  const [currentStackHolder, setCurrentStackHolder] = useState<
    StakHolderData | undefined
  >()

  const [search, setSearch] = useState<string>('')

  const [actionType, setActionType] = useState<StackHolderFormType>('add')

  const filterStackholders = useMemo<StakHolderData[]>(() => {
    return stackholders.filter((stackholder) =>
      stackholder.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [search, stackholders])

  const [open, setOpen] = React.useState(false)

  const toogleNewStackHolderForm = () => {
    setOpen(!open)
  }

  const handleNewStackHolder = (data: StakHolderData) => {
    if (actionType === 'edit' && currentStackHolder) {
      const index = stackholders.findIndex(
        (stackholder) => stackholder.id === data.id
      )
      const newStackholders = [...stackholders]
      newStackholders[index] = data
      setStackholders(newStackholders)
      setOpen(false)
      setActionType('add')
      setCurrentStackHolder(undefined)
      return
    }
    setStackholders([...stackholders, data])
    setOpen(false)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const editStackHolder = (data: StakHolderData) => {
    setCurrentStackHolder(data)
    setActionType('edit')
    console.log(data)
    setOpen(true)
  }

  const dropDownAction: ChildElementTpe = [
    {
      label: 'Add new stakeholder',
      onClick: toogleNewStackHolderForm,
    },
    {
      label: 'Add bulk stakeholders',
    },
    {
      label: 'Update bulk stakeholders',
    },
    {
      label: 'Import payroll data',
      MenuItemProps: {
        divider: true,
      },
    },
    {
      label: 'STAKEHOLDER PROPERTIES',
      color: theme.palette.text.lowEmphasis,
    },
    {
      label: 'Add custom properties',
    },
    {
      label: 'Update properties',
    },
  ].map((element) => ({
    element: (
      <>
        <Typography
          variant="b3"
          onClick={element.onClick}
          color={element.color}
        >
          {element.label}
        </Typography>
      </>
    ),
    MenuItemProps: element.MenuItemProps,
  }))

  return (
    <DataTable
      data={filterStackholders}
      columnsDefination={getStackHolderColumnDefination(editStackHolder)}
      enableTopToolbar={true}
      renderTopToolbar={() => {
        return (
          <Stack gap={6} mb={5}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h1">All stakeholders</Typography>
              <Stack direction="row" gap={2}>
                <Button
                  text="Download report"
                  variant="outlined"
                  typographyVarient="b3"
                  sx={{ marginX: 1 }}
                  startIcon={
                    <Icon
                      src={DownloadIcon}
                      alt="Download"
                      boxProps={{ mt: 2 }}
                    />
                  }
                />
                <DropdownButton
                  parentElement={
                    <Button
                      text="Manage stakeholders"
                      typographyVarient="b3"
                      endIcon={
                        <Icon
                          src={DownArrow}
                          alt="Download"
                          boxProps={{ mt: 2 }}
                        />
                      }
                    />
                  }
                  childElement={dropDownAction}
                  menuProps={{
                    anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
                    transformOrigin: {
                      vertical: 'top',
                      horizontal: 'right',
                    },
                    PaperProps: {
                      sx: {
                        mt: 2,
                      },
                    },
                  }}
                />
              </Stack>
            </Stack>
            <Stack direction="row" gap={3}>
              <TextField
                size="small"
                type="text"
                placeholder="Search..."
                sx={{ width: theme.spacing(90) }}
                value={search}
                onChange={handleSearchChange}
                startIcon={
                  <Icon src={Search} alt="Search" boxProps={{ mt: 0.4 }} />
                }
              />
              <Icon
                src={FilterIcon}
                alt="Filter Icon"
                imgProps={{ height: theme.spacing(12.4) }}
              />
            </Stack>
            <AddStackHolderForm
              open={open}
              handleClose={toogleNewStackHolderForm}
              addNewStackHolder={handleNewStackHolder}
              initailValues={currentStackHolder}
              formType={actionType}
            />
          </Stack>
        )
      }}
    />
  )
}

export default AllStackHolder
