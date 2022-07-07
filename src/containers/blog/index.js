import Header from "../../components/header"
import {useState, useEffect} from 'react'
import Blog from '../../components/blog'
import { Button, Modal, Input } from "antd"
import axios from "axios"

function Blogs() {
    const [blogs, setBlogs] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [blog, setBlog] = useState({title: "", desc: ""})
    const [editIndex, setEditIndex] = useState(undefined)

    useEffect(() => {
       axios.get('https://api.artic.edu/api/v1/artworks').then(res =>
       setBlogs(res.data.data.map(item => {
        return {
            title: item.title,
            desc: item.credit_line,
            thumbnail: item.thumbnail.lqip
        }
       }))
       ).catch(err => console.log(err))
    }, [])

    const handleOk = () => {
        if(editIndex >= 0) {
            blogs.splice(editIndex, 1, blog)
            setBlogs([...blogs])
        } else setBlogs([...blogs, blog])
        handleCancel()
    }

    const handleCancel = () => { 
        setIsModalVisible(false)
        clearBlog()
    }

    const openModal = index => {
        if(index >= 0) {
            setBlog(blogs[index])
            setEditIndex(index)
        }
        setIsModalVisible(true)
    }

    const handleChange = e => {
        setBlog({...blog, [e.target.name]: e.target.value})
    }

    const clearBlog = () => {
        setBlog({title: "", desc: ""})
        setEditIndex(undefined)
     }

    const handleDelete = index => {
        setBlogs(blogs.filter((item, i) => i !== index))
    }

    const blogItems = blogs.map((item, i) => <Blog blog={item} openModal={openModal} handleDelete={handleDelete} index={i} key={i}/>)

    
    return(
        <>
            <Button onClick={openModal}>Add blog</Button>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {blogItems}
            </div>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input value={blog.title} onChange={handleChange} name="title" placeholder="Title"/>
                <Input value={blog.desc} onChange={handleChange} name="desc" placeholder="Description"/>
            </Modal>
        </>
    )
}

export default Blogs