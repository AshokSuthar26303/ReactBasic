export const ParentComponents =()=>{
    return (
        <>
        <h1>Hello component A</h1>
        <ChildCompo data="Fast Food....!" />
        </>
    )
}

const ChildCompo =(props)=>{
    return (
        <>
        <h1>Hello Component B</h1>
        <GrandChild data={props.data} />
        </>
    )
}

const GrandChild =(props)=>{
    return (
        <>
        <h1>Copmponent C</h1>
        <GreatGrandChild data={props.data}/>
        </>
    )
}


const GreatGrandChild =(props)=>{
    return (
        <>
        <h1>i love {props.data}</h1>
        </>
    )
}