function CheckboxItem({item, handleChange, index, done}) {
    console.log(item)
    return(
        <div>
            <input type="checkbox" onChange={(e) => handleChange(e, item, index)}/>
            <span style={{textDecoration: done ? 'line-through' : 'none'}}>{item}</span>
        </div>
    )
}

export default CheckboxItem