export default function SelectCategory(props) {
    let {name, id, fetchQuestion, setCurrentCategory } = props

    return (
        <button key={id} onClick={() => { fetchQuestion(id); setCurrentCategory(id); }}>
            {name}
        </button>
    )
}