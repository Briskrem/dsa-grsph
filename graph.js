class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let vertex of vertexArray){
      this.addVertex(vertex)
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2)
    v2.adjacent.add(v1)
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2)
    v2.adjacent.delete(v2)
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {}

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    const visited = new Set();
    const result = [];

    function traverse(vertex) {
      // base case
      if (!vertex) {
        return null;
      }
      // visit node
      visited.add(vertex);
      result.push(vertex.value);

      // visit neighbors
      vertex.adjacent.forEach(neighbor => {
        if (!visited.has(neighbor)) {
          return traverse(neighbor);
        }
      });
    }

    traverse(start);
    console.log(result)
    return result;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {}
}

let redMan = new Node('red man')
let kehe = new Node('kehe')
let loki = new Node('loki')
let miami = new Node('miami')
let lilWoman = new Node('lil womam')

redMan.adjacent.add(kehe)
redMan.adjacent.add(loki)

let graph = new Graph()

// graph.addVertex(redMan)
graph.addVertex(miami)

graph.addVertices([kehe, redMan,  loki, lilWoman])

graph.addEdge(kehe, loki)
graph.addEdge(kehe, lilWoman)
graph.addEdge(kehe, miami)
graph.addEdge(miami, loki)
graph.addEdge(kehe, redMan)

graph.depthFirstSearch(kehe)

// graph.removeEdge(kehe, loki)

// console.log(redMan)
console.log(graph)

// module.exports = {Graph, Node}