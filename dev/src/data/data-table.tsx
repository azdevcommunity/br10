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
import {Button} from "@/components/ui/button.tsx"
import React from "react"
import {Spacer} from "@nextui-org/react"
import {Skeleton} from "@/components/ui/skeleton.tsx";
import {
    Drawer, DrawerClose,
    DrawerContent,
    DrawerDescription, DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer.tsx";
import {Minus, Plus} from "@mynaui/icons-react";

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
    const isRowSelected = Object.keys(rowSelection).length > 0;

    const [openDropdown, setOpenDropdown] = React.useState(false);
    const [drawerData, setDrawerData] = React.useState<any>(null);
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


    const handleButtonClick = () => {
        // @ts-ignore
        const selectedIds = table.getSelectedRowModel().rows.map((row) => row.original.id);
        onSelectionChange(selectedIds);
    };

    const handleClickTableRow = (id: any) => {
        setDrawerData(data[id])
        setOpenDropdown(true);
        console.log("row id", (data[id]))
    }


    return (
        <>
            {isRowSelected && (
                <div className="absolute max-sm:-top-4 top-0 left-0 w-full max-sm:px-1 px-10 py-1.5 z-10 font-medium text-sm">
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
                                table.getRowModel().rows.map((row) => {
                                    return (
                                        <TableRow
                                            key={row.id}
                                            onClick={(e) => {
                                                const element = (e.target as HTMLElement);
                                                if (element.getAttribute("type") != "button" &&
                                                    element.getAttribute("role") != "checkox"
                                                ) {
                                                    handleClickTableRow(row.id)
                                                }
                                            }
                                            }
                                            data-state={row.getIsSelected() && "selected"}
                                        >
                                            {row.getVisibleCells().map((cell) => (
                                                <TableCell key={cell.id}>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </TableCell>
                                            ))
                                            }
                                        </TableRow>
                                    )
                                })
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="h-full text-center">
                                        <Skeleton className="h-4 w-full"/>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                    <Drawer open={openDropdown} onOpenChange={setOpenDropdown}>
                        <DrawerContent>
                            <div className="mx-auto w-full max-w-sm bg-white  rounded-lg p-6">
                                <DrawerHeader className="flex flex-col items-center">
                                    {/* Image container */}
                                    <div
                                        className="relative w-24 h-24 rounded-full overflow-hidden  shadow-lg">
                                        <img
                                            className="object-cover w-full h-full"
                                            src={drawerData?.image}
                                            alt="Profile Image"
                                        />
                                    </div>

                                    {/* Textual details */}
                                    <DrawerTitle className="mt-4 text-xl font-semibold text-gray-800">
                                        {drawerData?.name}
                                    </DrawerTitle>
                                    <DrawerDescription className="text-gray-600 text-center mt-2">
                                        {drawerData?.description}
                                    </DrawerDescription>
                                </DrawerHeader>

                                {/* Drawer Footer */}
                                <DrawerFooter className="mt-6 flex justify-between">
                                    {/* Placeholder buttons for submit and cancel */}
                                    {/*<Button>Submit</Button>*/}
                                    {/*<DrawerClose asChild>*/}
                                    {/*  <Button variant="outline">Cancel</Button>*/}
                                    {/*</DrawerClose>*/}
                                </DrawerFooter>
                            </div>
                        </DrawerContent>
                    </Drawer>

                </div>
            </div>
            <div className="flex items-center justify-between space-x-2 py-4">
                {isRowSelected ? (
                    <Button variant="default" size="sm" className={"max-sm:ml-5"} onClick={handleButtonClick}>
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
                    <Spacer x={2}/>
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