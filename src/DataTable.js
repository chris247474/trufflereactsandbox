import React, {Component} from 'react';
import DataTables from 'material-ui-datatables';



class DataTable extends Component {
  
  handleFilterValueChange = (value) => {
    // your filter logic
  }

  handleSortOrderChange = (key, order) => {
    // your sort logic
  }

  render() {
    return (
      <DataTables
        height={'auto'}
        selectable={false}
        showRowHover={true}
        columns={this.props.columnData}
        data={this.props.rowData}
        showCheckboxes={false}
        onCellClick={this.handleCellClick}
        onCellDoubleClick={this.handleCellDoubleClick}
        onFilterValueChange={this.handleFilterValueChange}
        onSortOrderChange={this.handleSortOrderChange}
        page={1}
        count={100}
      />
    );
  }
}

export default DataTable