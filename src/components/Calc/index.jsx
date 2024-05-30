const fcalcular = (props) => {
    const calc = () => {
        props.sr(props.p / (props.a * props.a))
    }
    return (
        <>
            <button onClick={calc} type="">Calcular</button>
        </>
    )
}

export default fcalcular