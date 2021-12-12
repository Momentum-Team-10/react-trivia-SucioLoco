export default function SelectCategory(props) {
    let {name, index, id, fetchQuestion, setCurrentCategory } = props

    return (
        <button key={index} onClick={() => { fetchQuestion(id); setCurrentCategory(id); }}>
            {name}
        </button>
    )
}