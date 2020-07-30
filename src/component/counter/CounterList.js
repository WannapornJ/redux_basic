import React from 'react'
import { connect } from 'react-redux'

function CounterList(props) {
    return (
        <div>
            {props.ctrList.map((ctr) => {
                return   <div>{ctr}</div>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ctrList: state.counterList
    }
}

export default connect(mapStateToProps, null)(CounterList)
