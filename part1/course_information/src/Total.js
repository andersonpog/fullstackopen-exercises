const Total = (props) => <p>Numer of exercises {props.total.reduce((sumTotal,part)=>sumTotal+part.exercises,0)}</p>

export default Total