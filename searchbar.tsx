import React, { Component } from 'react';

class SearchField extends Component<any,any> {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        };
    }

    handleInputChange = (event) => {
        this.setState({
            searchTerm: event.target.value,
        });
    };

    handleSearch = () => {
        // Implement your search logic here, using this.state.searchTerm
        console.log('Searching for:', this.state.searchTerm);
    };

    render() {
        return (
            <div className="my-5 flex justify-center">
                <div className="w-5/6 p-5 flex items-center">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={this.state.searchTerm}
                            onChange={this.handleInputChange}
                            className="border-4 p-2 w-full rounded-full bg-dark"
                        />
                    </div>
                    <button onClick={this.handleSearch} className="bg-green-300  p-2 ml-1  rounded-full"><img
                        src="src/assets/search-icon.png" alt="" className={'w-10'}/>

                    </button>
                </div>
            </div>
        );
    }
}

export default SearchField;