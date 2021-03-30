import { MenuItem, SelectField, TextField } from "material-ui";
import React, { Component } from "react";
import axios from "axios";
import ImageResults from './ImageResults'

export default class Search extends Component {
  state = {
    searchText: "",
    amount: 5,
    apiUrl: "https://pixabay.com/api",
    apiKey: "20872776-9cea79aa18fbdc0e4fa86e248",
    images: [],
  };
  onTextChange = (e) => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === "") {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then((res) => this.setState({images:res.data.hits}))
          .catch((err) => console.log(err));
      }
    });
  };

  onAmountChange = (e, index, value) => this.setState({ amount: value });

  render() {
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search For Images"
          fullWidth={true}
        />
        <br />

        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={20} primaryText="20" />
          <MenuItem value={25} primaryText="25" />
        </SelectField>
        <br/>
        {this.state.images.length > 0 ? (
            <ImageResults images={this.state.images}/> 
        ):null}
      </div>
    );
  }
}
