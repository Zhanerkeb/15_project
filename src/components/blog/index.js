import {Button, Card} from 'antd'

function Blog({blog, index, handleDelete, openModal}) {
  const {title, desc, thumbnail} = blog
    return(
        <Card
          title={title}
          extra={<div>
            <Button onClick={() => handleDelete(index)} type="default">Delete</Button>
            <Button onClick={() => openModal(index)}>Edit</Button>
          </div>}
          style={{
            width: 300,
            margin: '10px'
          }}
        >
          <p>{desc}</p>
          <img src={thumbnail} width={100} height={100}/>
        </Card>
    )
}

export default Blog