import workFlow from "./workFlow";
test('create workFlow without Errors', () => {
   const wf = workFlow({
      a1: (goto) => {

      },
      a2: (goto) => {

      }}, 'a1');
   expect(wf().state).toBe('a1')
});

test('switch States', () => {
   let changeState = (key:string):object|void => {};
   const wf = workFlow({
      a1: (goto) => {
         changeState = goto;
      },
      a2: (goto) => {

      }}, 'a1');
   changeState('a2');
   expect(wf().state).toBe('a2')
});

test('switch States should work only once', () => {
   let changeState = (key:string):object|void => {};
   const wf = workFlow({
      a1: (goto) => {
         changeState = goto;
      },
      a2: (goto) => {

      }}, 'a1');
   changeState('a2');
   changeState('a1');
   expect(wf().state).toBe('a2')
});
