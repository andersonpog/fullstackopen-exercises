const Total = ({total}) => <p>Numer of exercises {total.reduce((sumTotal,part)=>sumTotal+part.exercises,0)}</p>

export default Total