import ItemLink from '../ItemLink'

export const List = ({ data }) => {
    const listData = data ? Object.entries(data) : []
    return (
        <>
            <ul>
                {
                    listData.map((x) => {
                        return <ItemLink data={x} key={x[1].id} />
                    })
                }
            </ul>
        </>
    )
}
export default List