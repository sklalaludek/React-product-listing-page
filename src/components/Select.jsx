import React, {Component} from "react";

const selectStyle = {
    wrapper: {
        display: "block",
        cursor: "pointer"
    },
    filters: {}
};
const CheckboxList = ({list, open, onClick, checked}) => (<ul style={{
        display: open
            ? "block"
            : "none",
        paddingLeft: 5,
        listStyle: "none"
    }}>
    {
        list.map((el, i) => (<li key={i}>
            <input value={el} type="checkbox" checked={checked} onClick={(e) => onClick(e)}/> {el}
        </li>))
    }
</ul>);

class Select extends Component {
    state = {
        categoryOpen: false,
        colorOpen: false,
        filtered: []
    }

    handleSelect = e => {
        let el = e.target.value;
        this.setState({lastActive: el});

        const {products} = this.props;
        const filtered = Object.keys(products).map(el => products[el]).filter(product => product.categories.includes(el) || product.colors.includes(el));
        if (e.target.checked) {
            this.setState({filtered: filtered})
        } else {
            this.setState({filtered: this.props.products})
        }
    };

    handleCategoryShow = () => {
        this.setState({
            categoryOpen: !this.state.categoryOpen
        });
        if (this.state.colorOpen) {
            this.setState({
                colorOpen: !this.state.colorOpen
            });
        }

    };

    handleColorShow = () => {
        this.setState({
            colorOpen: !this.state.colorOpen
        });
        if (this.state.categoryOpen) {
            this.setState({
                categoryOpen: !this.state.categoryOpen
            });
        }
    };

    render() {
        const {list, colors} = this.props;
        const {categoryOpen, colorOpen, filtered} = this.state;
        console.log('children', this.props.children);
        return (<div style={selectStyle.wrapper}>
            <div onClick={() => this.handleCategoryShow()}>
                Categories
            </div>
            <CheckboxList list={list} open={categoryOpen} onClick={category => this.handleSelect(category)}/>
            <div onClick={() => this.handleColorShow()}>
                Colors
            </div>
            <CheckboxList list={colors} open={colorOpen} onClick={(e) => this.handleSelect(e)}/> {this.props.children(filtered)}
        </div>);
    }
}

export default Select;
