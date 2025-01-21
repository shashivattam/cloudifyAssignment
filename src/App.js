import { Component } from "react";
import { v4 } from "uuid";
import { IoAdd } from "react-icons/io5";

import './App.css'

const singleSelectOptions = ["English", "Telugu", "Hindi", "Kannada", "Tamil"];

const aMultiSelectOptions = [
  "option1",
  "option2",
  "option3",
  "option4",
  "option5",
];

const initializedRows = [
  {
    id: v4(),
    singleSelect: "",
    multiSelect: [],
  },
];
class App extends Component {
  state = {
    rows: initializedRows,
    multiSelectOptions: aMultiSelectOptions,
  };

  handleSingleSelectChange = (id, value) => {
    this.setState((prevState) => ({
      rows: prevState.rows.map((row) => {
        if (row.id === id) {
          return { ...row, singleSelect: value };
        }
        return row;
      }),
    }));
  };

  handleMultiSelectChange = (rowId, selectedOptions) => {
    this.setState((prevState) => ({
      rows: prevState.rows.map((row) => {
        if (row.id === rowId) {
          return { ...row, multiSelect: selectedOptions };
        }
        return row;
      }),
    }));
  };

  onAddNewRow = () => {
    const { rows } = this.state;
    const newRow = {
      id: v4(),
      singleSelect: "",
      multiSelect: [],
    };

    this.setState({
      rows: [...rows, newRow],
    });
  };

  handleAddMultiSelectOption = (newOption) => {
    const { multiSelectOptions } = this.state;
    this.setState({
      multiSelectOptions: [...multiSelectOptions, newOption],
    });
  };



  render() {
    const { rows, multiSelectOptions } = this.state;
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Label 1</th>
              <th>Label 2</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                {/* Single Select Column */}
                <td>
                  <select
                    value={row.singleSelect}
                    onChange={(e) => {
                      this.handleSingleSelectChange(row.id, e.target.value);
                    }}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <hr/>
                    {singleSelectOptions
                      .filter(
                        (option) =>
                          !rows.some(
                            (r) => r.singleSelect === option && r.id !== row.id
                          )
                      )
                      .map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                  </select>
                </td>

                {/* Multi Select Column */}
                <td>
                  <select
                    multiple
                    value={row.multiSelect}
                    onChange={(e) => {
                      this.handleMultiSelectChange(
                        row.id,
                        Array.from(
                          e.target.selectedOptions,
                          (option) => option.value
                        )
                      );
                    }}
                  >
                    {multiSelectOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div>
                  <form>
                    <input
                      type="text"
                      placeholder="Add new option"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && e.target.value) {
                          
                            this.handleMultiSelectChange(e.target.value);
                          
                          e.target.value = "";
                        }
                      }}
                    />
                    
<button className = "add-btn" type = "submit">Add <IoAdd className ="icon"/>
</button>     
</form>               
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button onClick={this.onAddNewRow}>Add New Row</button>
      </div>
    );
  }
}

export default App;
