import React from 'react'
import { connect } from 'react-redux'
import { actionTypes } from '../../store/actionTypes'

function ButtonRecord(props) {
    return (
        <div style={{
            width: '150px',
            height: '35px',
            cursor: 'pointer',
            border: '1px solid black',
            margin: 'auto'
        }}
        onClick={props.submit}>
            Record
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        submit: () => dispatch({ type: actionTypes.RECORD_COUNTER })
    }
}

export default connect(null, mapDispatchToProps)(ButtonRecord)
