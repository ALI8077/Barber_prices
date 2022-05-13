import React  from 'react'

const Scores = () => {
    const [scoreData, setSD] = useState([])
    const [name, setName] = useState('John')
    useEffect(() => {
        setSD(fetch(`/hello/${name}`))
        .then(res => res.json())
    },[])
    return (
        <div>Scores:
            {scoreData.map(e => <DataItem score={e.score} name={e.name}/>)}
        </div>
    )
}

export default Scores