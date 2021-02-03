import ItemLink from '../ItemLink'

export const List = (props) => {
    const data = props.data ? Object.entries(props.data) : []
    return (
        <>
            <ul>
                {
                    data.map((x) => {
                        return <ItemLink data={x} key={x[1].id} />
                    })
                }
            </ul>
        </>
    )
}
export default List