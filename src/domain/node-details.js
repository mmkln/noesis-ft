const NODE_KIND_LABELS = Object.freeze({
  concept: 'Concept',
  claim: 'Claim',
  question: 'Question',
  evidence: 'Evidence',
});

const RELATION_KIND_LABELS = Object.freeze({
  related_to: 'Related to',
  defines: 'Defines',
  supports: 'Supports',
  contradicts: 'Contradicts',
  depends_on: 'Depends on',
  causes: 'Causes',
  example_of: 'Example of',
});

function fallbackLabel(value, fallback) {
  if (typeof value !== 'string' || !value.trim()) return fallback;
  const words = value.trim().replaceAll('_', ' ').replaceAll('-', ' ');
  return words.charAt(0).toUpperCase() + words.slice(1);
}

export function getNodeKindLabel(kind) {
  return NODE_KIND_LABELS[kind] || fallbackLabel(kind, 'Concept');
}

export function getRelationKindLabel(kind) {
  return RELATION_KIND_LABELS[kind] || fallbackLabel(kind, 'Related to');
}

export function buildNodeDetails(graph, nodeId) {
  const nodes = Array.isArray(graph?.nodes) ? graph.nodes : [];
  const links = Array.isArray(graph?.links) ? graph.links : [];
  const nodesById = new Map(nodes.map((node) => [node.id, node]));
  const node = nodesById.get(nodeId);
  if (!node) return null;

  const connections = links
    .map((link) => {
      const outgoing = link.sourceId === nodeId;
      const incoming = link.targetId === nodeId;
      if (!outgoing && !incoming) return null;

      const connectedNode = nodesById.get(
        outgoing ? link.targetId : link.sourceId,
      );
      if (!connectedNode) return null;

      return {
        id: link.id,
        nodeId: connectedNode.id,
        nodeTitle: connectedNode.text,
        nodeKind: connectedNode.kind,
        direction: outgoing ? 'outgoing' : 'incoming',
        relationKind: link.kind,
        relationLabel: typeof link.label === 'string' && link.label.trim()
          ? link.label.trim()
          : getRelationKindLabel(link.kind),
      };
    })
    .filter(Boolean)
    .sort((left, right) => {
      if (left.direction !== right.direction) {
        return left.direction === 'incoming' ? -1 : 1;
      }
      return left.nodeTitle.localeCompare(right.nodeTitle);
    });

  return {
    id: node.id,
    title: node.text,
    body: typeof node.body === 'string' ? node.body : '',
    kind: node.kind,
    kindLabel: getNodeKindLabel(node.kind),
    connections,
  };
}
