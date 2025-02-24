import React from 'react'

export default function Alerts(props) {
    const captilize = (element) => {
        let word = element.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return (
        <div style={{ height: '1rem' }}>
            {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">
                <strong>{captilize(props.alert.type)}</strong>: {props.alert.msg}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
        </div>
    )
}
