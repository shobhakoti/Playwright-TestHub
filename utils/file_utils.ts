import * as path from 'path';
import * as XLSX from 'xlsx';

export function readCredentialsFromExcel(): { username: string; password: string }[] {
    //const filePath = path.resolve(__dirname, '../data/excel_data.xlsx');
    const workbook = XLSX.readFile('../data/excel_data.xlsx');
    const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
    const sheet = workbook.Sheets[sheetName];
    //const data = XLSX.utils.sheet_to_json<{ username: string; password: string }>(sheet);
    const data = XLSX.utils.sheet_to_json(sheet);

    return data as { username: string, password: string }[];
   // return data.map(row => ({
   //     username: row.username,
   //     password: row.password
  //  }));
}