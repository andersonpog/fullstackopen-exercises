const Message = ({message, type}) => {
    if (message === null)
        return <></>
    if (type==='success')
        return(
            <div className="success">
                <p>{message}</p>
            </div>
        )
    if (type==='fail')
        return(
            <div className="fail">
                <p>{message}</p>
            </div>
        )
}
 
export default Message;