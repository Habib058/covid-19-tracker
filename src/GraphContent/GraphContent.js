import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import LineGraph from '../LineGraph/LineGraph';
import Table from '../Table/Table';

const GraphContent = ({tableData}) => {
    return (
        <Card className="right">
        <CardContent>
          <h3>Live Cases By Country</h3>
          <Table tableData={tableData}></Table>
          <h3>Worldwide new cases</h3>
          <LineGraph/>
        </CardContent>
      </Card>
    );
};

export default GraphContent;