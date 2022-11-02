import Part from "./Part"

const Content = ({content}) => <>{content.map((content) => <Part key={content.id} {...content}/>)}</>

export default Content