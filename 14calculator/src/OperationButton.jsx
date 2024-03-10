import { ACTIONS } from "./App"

export default function ({ dispatch, operation }) {

    return <button onClick={() => dispatch({ type: ACTIONS.ADD_OPERATION, payload: { operation } })}>{operation}</button>
}