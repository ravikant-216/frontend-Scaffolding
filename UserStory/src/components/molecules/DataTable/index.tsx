import React from 'react'
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  MaterialReactTableProps,
} from 'material-react-table'

interface DataTableProps extends Omit<MaterialReactTableProps, 'columns'> {
  columnsDefination: MRT_ColumnDef[]
  data: any[]
}

const DataTable = ({
  data,
  columnsDefination,
  ...props
}: DataTableProps): React.ReactNode => {
  return (
    <MaterialReactTable
      data={data}
      columns={columnsDefination}
      enablePagination={false}
      enableFilters={false}
      enableColumnActions={false}
      enableColumnFilters={false}
      enableSorting={false}
      enableBottomToolbar={false}
      enableTopToolbar={false}
      enableRowSelection
      muiTablePaperProps={{
        elevation: 0,
      }}
      {...props}
    />
  )
}

export default DataTable
