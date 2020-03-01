import workFlow from "./workFlow";
test('create workFlow', () => {
   const stateFunctions = {};
   workFlow({asdf: (goto:() => void) => {}}, 'asdf');
   expect(1).toBe(1)
});
