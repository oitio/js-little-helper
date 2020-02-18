export default function workFlow(states: object, start: string) {
    let state: string;
    let scope: object;
    setState(start);

    function setState(key: string): undefined {
        let fn = states[key];
        if (!fn) {
            state = undefined;
            return;
        }
        state = key;
        let fired = false;
        console.log(state);
        scope = fn(goto => {
            if (!fired) setState(goto);
            fired = true;
        })
    }

    return () => ({state, scope});
}
