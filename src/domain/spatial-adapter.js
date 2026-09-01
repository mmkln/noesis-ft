const DEFAULT_NODE_RADIUS = 7;


export function graphToSpatialGraph(graph) {
  const rawNodes = Array.isArray(graph?.nodes) ? graph.nodes : [];
  const rawRelations = Array.isArray(graph?.relations) ? graph.relations : [];
  const knownNodeIds = new Set(
    rawNodes
      .filter((node) => typeof node?.id === 'string')
      .map((node) => node.id),
  );
  const connectionCounts = new Map();

  const links = rawRelations
    .filter((relation) => (
      typeof relation?.id === 'string'
      && knownNodeIds.has(relation.sourceId)
      && knownNodeIds.has(relation.targetId)
      && relation.sourceId !== relation.targetId
    ))
    .map((relation) => {
      connectionCounts.set(
        relation.sourceId,
        (connectionCounts.get(relation.sourceId) || 0) + 1,
      );
      connectionCounts.set(
        relation.targetId,
        (connectionCounts.get(relation.targetId) || 0) + 1,
      );

      return {
        id: relation.id,
        sourceId: relation.sourceId,
        targetId: relation.targetId,
        kind: relation.kind,
        spacing: 'normal',
      };
    });

  const nodes = rawNodes
    .filter((node) => typeof node?.id === 'string')
    .map((node) => {
      const connectionCount = connectionCounts.get(node.id) || 0;

      return {
        id: node.id,
        text: typeof node.title === 'string' && node.title
          ? node.title
          : 'Untitled knowledge',
        kind: node.kind,
        radius: Math.min(
          13,
          DEFAULT_NODE_RADIUS + Math.sqrt(connectionCount) * 1.6,
        ),
        connectionCount,
      };
    });

  return { nodes, links };
}
