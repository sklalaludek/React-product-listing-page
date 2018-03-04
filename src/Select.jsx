import React, {Component} from "react";

const styles = {
    wrapper: {
        display: "block",
        cursor: "pointer"
    }
};

const CheckboxList = ({list, open, onClick}) => (<ul style={{
        display: open
            ? "block"
            : "none",
        paddingLeft: 5,
        listStyle: "none"
    }}>
    {
        list.map((el, i) => (<li key={i}>
            <input value={el} type="checkbox" onClick={() => onClick(el)}/> {el}
        </li>))
    }
</ul>);

class Select extends Component {
    state = {
        categoryOpen: false,
        colorOpen: false,
        filtered: []
    }

    handleSelect = el => {
        const {products} = this.props;
        const filtered = Object.keys(products).map(el => products[el]).filter(product => product.categories.includes(el) || product.colors.includes(el));
        this.setState({filtered});
    };

    handleCategoryShow = () => this.setState({
        categoryOpen: !this.state.categoryOpen
    })

    handleColorShow = () =>
		this.setState({
        colorOpen: !this.state.colorOpen
    })

    render() {
        const {list, colors} = this.props;
        const {categoryOpen, colorOpen, filtered} = this.state;
        return (<div style={styles.wrapper}>
            <div onClick={() => this.handleCategoryShow()}>
                Categories
            </div>
            <CheckboxList list={list} open={categoryOpen} onClick={category => this.handleSelect(category)}/>
            <div onClick={() => this.handleColorShow()}>
                Colors
            </div>
            <CheckboxList list={colors} open={colorOpen} onClick={color => this.handleSelect(color)}/> {this.props.children(filtered)}
        </div>);
    }
}

export default Select;
