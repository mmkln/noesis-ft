import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildNodeDetails,
  getNodeKindLabel,
  getRelationKindLabel,
} from './domain/node-details.js';

const graph = {
  nodes: [
    { id: 'concept', text: 'Noesis', body: 'A knowledge graph.', kind: 'concept' },
    { id: 'claim', text: 'Graphs aid synthesis', body: '', kind: 'claim' },
    { id: 'evidence', text: 'Research note', body: '', kind: 'evidence' },
  ],
  links: [
    {
      id: 'defines',
      sourceId: 'concept',
      targetId: 'claim',
      kind: 'defines',
      label: '',
    },
    {
      id: 'supports',
      sourceId: 'evidence',
      targetId: 'concept',
      kind: 'supports',
      label: 'Validated by research',
    },
  ],
};

test('builds node details with incoming and outgoing typed connections', () => {
  const details = buildNodeDetails(graph, 'concept');

  assert.equal(details.title, 'Noesis');
  assert.equal(details.body, 'A knowledge graph.');
  assert.equal(details.kindLabel, 'Concept');
  assert.deepEqual(details.connections, [
    {
      id: 'supports',
      nodeId: 'evidence',
      nodeTitle: 'Research note',
      nodeKind: 'evidence',
      direction: 'incoming',
      relationKind: 'supports',
      relationLabel: 'Validated by research',
    },
    {
      id: 'defines',
      nodeId: 'claim',
      nodeTitle: 'Graphs aid synthesis',
      nodeKind: 'claim',
      direction: 'outgoing',
      relationKind: 'defines',
      relationLabel: 'Defines',
    },
  ]);
});

test('returns null for an unknown node and ignores dangling connections', () => {
  assert.equal(buildNodeDetails(graph, 'missing'), null);
  assert.equal(buildNodeDetails({
    nodes: graph.nodes,
    links: [{ id: 'dangling', sourceId: 'concept', targetId: 'missing' }],
  }, 'concept').connections.length, 0);
});

test('formats known and future node and relation kinds', () => {
  assert.equal(getNodeKindLabel('question'), 'Question');
  assert.equal(getNodeKindLabel('mental_model'), 'Mental model');
  assert.equal(getRelationKindLabel('depends_on'), 'Depends on');
  assert.equal(getRelationKindLabel('derived_from'), 'Derived from');
});
