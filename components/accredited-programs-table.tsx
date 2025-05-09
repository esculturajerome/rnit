// /Users/jescultura/projects/rnit/components/accredited-programs-table.tsx
"use client"; // Make this a Client Component
import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"; // Assuming shadcn/ui components are in @/components/ui
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"; // Assuming shadcn/ui components are in @/components/ui

// --- Type Definitions ---

/**
 * Defines the structure for a column in the data table.
 */
interface ColumnDefinition {
    label: string;
    field: string; // Used for unique keys, potentially for sorting or other metadata
    sort: "asc" | "desc" | string; // Accommodates existing 'asc' and future sorting
}

/**
 * Represents a generic row in the data table.
 * Data for columns is accessed via keys like 'row1', 'row2', etc.
 */
interface DataRow {
    // Allows any string key, expecting 'row1', 'row2', ...
    // All values are expected to be strings based on the provided data.
    [key: string]: string;
}

/**
 * Defines the structure for a complete dataset (e.g., UTPRASData, assessmentData).
 */
interface DataSet {
    columns: ColumnDefinition[];
    rows: DataRow[];
}

/**
 * Props for the AccreditedProgramsTable component.
 * It expects three distinct datasets.
 */
export interface AccreditedProgramsTableProps {
    utprasData: DataSet;
    assessmentData: DataSet;
    programsData: DataSet;
    title?: string; // Optional title for the entire tabbed section
}

// --- Helper Component for Rendering a Single Table ---

interface SingleTableDisplayProps {
    dataset: DataSet;
    caption?: string; // Optional caption for the individual table
}

const SingleTableDisplay: React.FC<SingleTableDisplayProps> = ({ dataset, caption }) => {
    // Guard clause for invalid or empty dataset
    if (!dataset || !dataset.columns || dataset.columns.length === 0 || !dataset.rows) {
        return <p className="py-8 text-center text-muted-foreground">No data available for this table.</p>;
    }

    const { columns: headers, rows } = dataset;

    return (
        <div className="mt-4 overflow-x-auto rounded-md border shadow-md" id='accredited-programs'> {/* Removed w-5xl for better responsiveness */}
            <Table>
                {caption && <TableCaption className="py-3">{caption}</TableCaption>}
                <TableHeader>
                    <TableRow>
                        {headers.map((header) => (
                            <TableHead key={header.field}>{header.label}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.length > 0 ? (
                        rows.map((row, rowIndex) => (
                            <TableRow key={`row-${rowIndex}`}>
                                {headers.map((header, colIndex) => {
                                    // Data is accessed using 'row1', 'row2', ... convention
                                    // This matches the structure of the 'rows' array in the provided data.
                                    const cellDataKey = `row${colIndex + 1}`;
                                    const cellValue = row[cellDataKey] || ''; // Default to empty string if data is missing

                                    return (
                                        <TableCell
                                            key={`${header.field}-${rowIndex}-${colIndex}`}
                                            className={colIndex === 0 ? "font-medium" : ""} // Style first column differently
                                        >
                                            {cellValue}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={headers.length} className="h-24 text-center">
                                No entries found in this table.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

// --- Main Exported Component ---

/**
 * Displays multiple datasets (Accredited Programs, UTPRAS, Assessment Info)
 * in a tabbed interface, each with its own table.
 * Uses shadcn/ui components for Tabs and Table.
 */
export const AccreditedProgramsTable: React.FC<AccreditedProgramsTableProps> = ({
    utprasData,
    assessmentData,
    programsData,
    // title prop was removed in a previous version, ensure it's not expected by ProgramsPage
}) => {

    // Basic check to ensure all required datasets are provided.
    if (!utprasData || !assessmentData || !programsData) {
        return <p className="py-8 text-center text-muted-foreground">One or more required data sets are missing.</p>;
    }

    return (
        <div className="wrapper_wide flex flex-col items-center py-8"> {/* Centering the Tabs component */}
            <Tabs defaultValue='programs' className="max-w-4xl wrapper"> {/* Control max-width of Tabs */}
                <TabsList className="grid grid-cols-3 overflow-x-scroll">
                    <TabsTrigger value="programs">Accredited Programs</TabsTrigger>
                    <TabsTrigger value="utpras">UTPRAS Registered</TabsTrigger>
                    <TabsTrigger value="assessment">Assessment Info</TabsTrigger>
                </TabsList>
                <TabsContent value="programs">
                    <SingleTableDisplay dataset={programsData} caption="List of Accredited Programs" />
                </TabsContent>
                <TabsContent value="utpras">
                    <SingleTableDisplay dataset={utprasData} caption="UTPRAS Registered Programs" />
                </TabsContent>
                <TabsContent value="assessment">
                    <SingleTableDisplay dataset={assessmentData} caption="Assessment Information" />
                </TabsContent>
            </Tabs>
        </div>
    );
};