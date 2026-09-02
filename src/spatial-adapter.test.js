import assert from 'node:assert/strict';
import test from 'node:test';

import { graphToSpatialGraph } from './domain/spatial-adapter.js';


test('maps Noesis nodes and relations into the Spatial contract', () => {
  const graph = graphToSpatialGraph({
    nodes: [
      { id: 'claim', title: 'A claim', body: 'Claim details', kind: 'claim' },
      { id: 'evidence', title: 'Evidence', kind: 'evidence' },
    ],
    relations: [
      {
        id: 'supports',
        sourceId: 'evidence',
        targetId: 'claim',
        kind: 'supports',
        label: 'Based on interview',
      },
    ],
  });

  assert.equal(graph.nodes.length, 2);
  assert.deepEqual(graph.links, [{
    id: 'supports',
    sourceId: 'evidence',
    targetId: 'claim',
    kind: 'supports',
    label: 'Based on interview',
    spacing: 'normal',
  }]);
  assert.equal(graph.nodes[0].text, 'A claim');
  assert.equal(graph.nodes[0].body, 'Claim details');
  assert.ok(graph.nodes[0].radius > 7);
});


test('drops relations whose endpoints are missing', () => {
  const graph = graphToSpatialGraph({
    nodes: [{ id: 'known', title: 'Known', kind: 'concept' }],
    relations: [{
      id: 'orphan',
      sourceId: 'known',
      targetId: 'missing',
      kind: 'related_to',
    }],
  });

  assert.equal(graph.nodes.length, 1);
  assert.deepEqual(graph.links, []);
});


test('normalizes malformed graph payloads to an empty graph', () => {
  assert.deepEqual(graphToSpatialGraph(null), { nodes: [], links: [] });
});
