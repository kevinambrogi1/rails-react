var AllItems = createReactClass({
    handleEdit() {

    },

    handleDelete(id) {
        this.props.handleDelete(id);
    },

    onUpdate(item) {
    this.props.onUpdate(item);
    },

    render: function() {
    var items= this.props.items.map((item) => {
        return (
            <div key={item.id}>
                <Item item={item}
                       handleDelete={this.handleDelete.bind(this, item.id)}
                       handleUpdate={this.onUpdate}/>
            </div>
        )
    });

        return(
            <div>
                {items}
            </div>
        )
    }
});
