"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button.tsx"
import React from "react"
import { Spacer } from "@nextui-org/react"
import {Skeleton} from "@/components/ui/skeleton.tsx";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    onSelectionChange: (selectedIds: number[]) => void;
}

export function DataTable<TData, TValue>({
                                             columns,
                                             data,
                                             onSelectionChange
                                         }: DataTableProps<TData, TValue>) {
    const [rowSelection, setRowSelection] = React.useState({});

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onRowSelectionChange: setRowSelection,
        state: {
            rowSelection,
        },
    });

    const isRowSelected = Object.keys(rowSelection).length > 0;

    const handleButtonClick = () => {
        // @ts-ignore
        const selectedIds = table.getSelectedRowModel().rows.map((row) => row.original.id);
        onSelectionChange(selectedIds);
    };

    return (
        <>
            {isRowSelected && (
                <div className="absolute top-0 left-0 w-full px-10 py-1.5 z-10 font-medium text-sm">
                    Seçilmiş xidmət sayı: {Object.keys(rowSelection).length}
                </div>
            )}
            <div className="relative overflow-x-auto !h-[30rem] max-sm:!h-[16rem] bg-transparent">
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="h-full text-center">
                                        <Skeleton className="h-4 w-full" />
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className="flex items-center justify-between space-x-2 py-4">
                {isRowSelected ? (
                    <Button variant="default" size="sm" onClick={handleButtonClick}>
                        Bron et
                    </Button>
                ) : <div></div>}
                <div className="flex items-center justify-end max-sm:pr-3">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Əvvəlki
                    </Button>
                    <Spacer x={2} />
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Növbəti
                    </Button>
                </div>
            </div>
        </>
    );
}