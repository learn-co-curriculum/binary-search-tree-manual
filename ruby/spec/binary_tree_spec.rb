require "../solutions/binary_tree"

describe "Node" do
  let(:node) { Node.new(10) }

  it "sets the value when a new Node is initialized" do
    expect(node.value).to eq(10)
  end

  it "sets the left and right node attributes to nil when no nodes are provided" do
    expect(node.left).to be_nil
    expect(node.right).to be_nil
  end

  it "sets the left and right nodes attributes when they are provided" do
    left = Node.new(1)
    right = Node.new(10)
    root = Node.new(5, left, right)

    expect(root.left).to be(left)
    expect(root.right).to be(right)
  end
end