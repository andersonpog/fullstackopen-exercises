import Part from "./Part"

const Content = (props) => 
    <>
        <Part {...props.content[0]} />
        <Part {...props.content[1]} />
        <Part {...props.content[2]} />
    </>

export default Content