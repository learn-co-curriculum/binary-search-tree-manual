const { Node } = require("../../solutions/binary_tree");

describe("Node", () => {
  const node = new Node(10);

  test("sets the value when a new Node is initialized", () => {
    expect(node.value).toBe(10);
  });

  test("sets the left and right node attributes to null when no nodes are provided", () => {
    expect(node.left).toBe(null);
    expect(node.right).toBe(null);
  });


  test("sets the left and right nodes attributes when they are provided", () => {
    const left = new Node(1);
    const right = new Node(10);
    const root = new Node(5, left, right);

    expect(root.left).toBe(left);
    expect(root.right).toBe(right);
  });
});
    
