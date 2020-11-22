import React from 'react'

class Sidebar extends React.Component {


    render() {
        const props = this.props

        return (
            <div className="sidebar">
                {
                    Boolean(props.sidebar.length) &&
                    <ul>
                        {
                            props.sidebar.map((x) => <li key={x.id}>{x.label}</li>)
                        }
                    </ul>
                }
            </div>
        )
    }
}
export default Sidebar