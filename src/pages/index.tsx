import moment from "moment-timezone";
import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const Table = styled.table`
    border-collapse:  collapse;
`

const TableRow = styled.tr`
`

const TableHeader = styled.th`
    border: solid 1px;
    padding: 10px;
`

const TableBody = styled.td`
    border: solid 1px;
    padding: 10px;
`

const Index = () => {

    const [startDate, setStartDate] = useState(new Date());

    const handleDate = (date: Date | null) => {
        if (date) {
            setStartDate(date);
        }
    }

    return (
        <>
            <DatePicker
                selected={startDate}
                onChange={(date: Date | null) => handleDate(date)}
                timeInputLabel="Time:"
                dateFormat="yyyy/MM/dd HH:mm:ss"
                showTimeInput
            />
            <Table>
                <TableRow>
                    <TableHeader>format</TableHeader>
                    <TableHeader>result</TableHeader>
                </TableRow>
                <TableRow>
                    <TableBody>default</TableBody>
                    <TableBody>{moment(startDate).format()}</TableBody>
                </TableRow>
                <TableRow>
                    <TableBody>YYYY年MM月DD日 HH時mm分</TableBody>
                    <TableBody>{moment(startDate).format('YYYY年MM月DD日 HH時mm分')}</TableBody>
                </TableRow>
                <TableRow>
                    <TableBody>unix timestamp</TableBody>
                    <TableBody>{moment(startDate).unix()}</TableBody>
                </TableRow>
                <TableRow>
                    <TableBody>ISO8601</TableBody>
                    <TableBody>{moment(startDate).toISOString()}</TableBody>
                </TableRow>
                <TableRow>
                    <TableBody>UTC</TableBody>
                    <TableBody>{moment(startDate).utc().format()}</TableBody>
                </TableRow>
                <TableRow>
                    <TableBody>Git log</TableBody>
                    <TableBody>{moment(startDate).format(
                        'ddd MMM DD HH:mm:ss YYYY ZZ'
                    )}</TableBody>
                </TableRow>
            </Table>
        </>
    );
}

export default Index;
