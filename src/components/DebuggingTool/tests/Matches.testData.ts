export const inputChunks = [
  {
    id: "db28bb4c-c771-11eb-8047-b025aa3e54c7",
    matches: [
      {
        id: "dbc23600-c771-11eb-85d7-b025aa3e54c7",
        mime_type: "text/plain",
        text: "match_0",
        granularity: 1,
        score: {
          op_name: "chunk_matcher",
          description: "score for chunk",
          ref_id: "db28bb4c-c771-11eb-8047-b025aa3e54c7",
        },
        adjacency: 1,
      },
      {
        id: "dbc23bdc-c771-11eb-85d7-b025aa3e54c7",
        mime_type: "text/plain",
        text: "match_1",
        granularity: 1,
        score: {
          value: 0.1,
          op_name: "chunk_matcher",
          description: "score for chunk",
          ref_id: "db28bb4c-c771-11eb-8047-b025aa3e54c7",
        },
        adjacency: 1,
      },
      {
        id: "dbc23f38-c771-11eb-85d7-b025aa3e54c7",
        mime_type: "text/plain",
        text: "match_2",
        granularity: 1,
        score: {
          value: 0.2,
          op_name: "chunk_matcher",
          description: "score for chunk",
          ref_id: "db28bb4c-c771-11eb-8047-b025aa3e54c7",
        },
        adjacency: 1,
      },
      {
        id: "dbc2423a-c771-11eb-85d7-b025aa3e54c7",
        mime_type: "text/plain",
        text: "match_3",
        granularity: 1,
        score: {
          value: 0.3,
          op_name: "chunk_matcher",
          description: "score for chunk",
          ref_id: "db28bb4c-c771-11eb-8047-b025aa3e54c7",
        },
        adjacency: 1,
      },
    ],
    mime_type: "text/plain",
    text: "chunk_0",
    granularity: 1,
    parent_id: "d82c8a86-c771-11eb-867e-b025aa3e54c7",
    content_hash: "ac17ad4d1eea81e9",
  },
  {
    id: "db28c010-c771-11eb-8047-b025aa3e54c7",
    matches: [
      {
        id: "dbc25464-c771-11eb-85d7-b025aa3e54c7",
        mime_type: "text/plain",
        text: "match_0",
        granularity: 1,
        score: {
          op_name: "chunk_matcher",
          description: "score for chunk",
          ref_id: "db28c010-c771-11eb-8047-b025aa3e54c7",
        },
        adjacency: 1,
      },
      {
        id: "dbc257ac-c771-11eb-85d7-b025aa3e54c7",
        mime_type: "text/plain",
        text: "match_1",
        granularity: 1,
        score: {
          value: 0.1,
          op_name: "chunk_matcher",
          description: "score for chunk",
          ref_id: "db28c010-c771-11eb-8047-b025aa3e54c7",
        },
        adjacency: 1,
      },
      {
        id: "dbc25a86-c771-11eb-85d7-b025aa3e54c7",
        mime_type: "text/plain",
        text: "match_2",
        granularity: 1,
        score: {
          value: 0.2,
          op_name: "chunk_matcher",
          description: "score for chunk",
          ref_id: "db28c010-c771-11eb-8047-b025aa3e54c7",
        },
        adjacency: 1,
      },
      {
        id: "dbc25d60-c771-11eb-85d7-b025aa3e54c7",
        mime_type: "text/plain",
        text: "match_3",
        granularity: 1,
        score: {
          value: 0.3,
          op_name: "chunk_matcher",
          description: "score for chunk",
          ref_id: "db28c010-c771-11eb-8047-b025aa3e54c7",
        },
        adjacency: 1,
      },
    ],
    mime_type: "text/plain",
    text: "chunk_1",
    granularity: 1,
    parent_id: "d82c8a86-c771-11eb-867e-b025aa3e54c7",
    content_hash: "adedb4c0da5a123e",
  },
]

export const expectedNodesAndEdges = [
  {
    data: {
      granularity: 1,
      id: "db28bb4c-c771-11eb-8047-b025aa3e54c7",
      mimeType: "text/plain",
      parentId: "d82c8a86-c771-11eb-867e-b025aa3e54c7",
      text: "chunk_0",
    },
    id: "db28bb4c-c771-11eb-8047-b025aa3e54c7",
    position: {
      x: 50,
      y: 200,
    },
    type: "chunk",
  },
  {
    animated: false,
    id: "edge-db28bb4c-c771-11eb-8047-b025aa3e54c7-1",
    label: "chunk",
    labelBgBorderRadius: 4,
    labelBgPadding: [8, 4],
    labelBgStyle: {
      color: "#000000",
      fill: "rgb(51, 173, 173)",
      fillOpacity: 0.7,
    },
    source: "db28bb4c-c771-11eb-8047-b025aa3e54c7",
    style: {
      stroke: "#009999",
    },
    target: "1",
  },
  {
    data: {
      adjacency: 1,
      id: "dbc23600-c771-11eb-85d7-b025aa3e54c7",
      mimeType: "text/plain",
      score: {
        description: "score for chunk",
        op_name: "chunk_matcher",
        ref_id: "db28bb4c-c771-11eb-8047-b025aa3e54c7",
      },
      text: "match_0",
    },
    id: "dbc23600-c771-11eb-85d7-b025aa3e54c7",
    position: {
      x: 0,
      y: 600,
    },
    type: "match",
  },
  {
    animated: true,
    id:
      "edge-dbc23600-c771-11eb-85d7-b025aa3e54c7-db28bb4c-c771-11eb-8047-b025aa3e54c7",
    label: "match",
    labelBgBorderRadius: 4,
    labelBgPadding: [8, 4],
    labelBgStyle: {
      color: "#000000",
      fill: "rgb(51, 173, 173)",
      fillOpacity: 0.7,
    },
    source: "dbc23600-c771-11eb-85d7-b025aa3e54c7",
    style: {
      stroke: "#009999",
    },
    target: "db28bb4c-c771-11eb-8047-b025aa3e54c7",
  },
  {
    data: {
      adjacency: 1,
      id: "dbc23bdc-c771-11eb-85d7-b025aa3e54c7",
      mimeType: "text/plain",
      score: {
        description: "score for chunk",
        op_name: "chunk_matcher",
        ref_id: "db28bb4c-c771-11eb-8047-b025aa3e54c7",
        value: 0.1,
      },
      text: "match_1",
    },
    id: "dbc23bdc-c771-11eb-85d7-b025aa3e54c7",
    position: {
      x: 450,
      y: 600,
    },
    type: "match",
  },
  {
    animated: true,
    id:
      "edge-dbc23bdc-c771-11eb-85d7-b025aa3e54c7-db28bb4c-c771-11eb-8047-b025aa3e54c7",
    label: "match",
    labelBgBorderRadius: 4,
    labelBgPadding: [8, 4],
    labelBgStyle: {
      color: "#000000",
      fill: "rgb(51, 173, 173)",
      fillOpacity: 0.7,
    },
    source: "dbc23bdc-c771-11eb-85d7-b025aa3e54c7",
    style: {
      stroke: "#009999",
    },
    target: "db28bb4c-c771-11eb-8047-b025aa3e54c7",
  },
  {
    data: {
      adjacency: 1,
      id: "dbc23f38-c771-11eb-85d7-b025aa3e54c7",
      mimeType: "text/plain",
      score: {
        description: "score for chunk",
        op_name: "chunk_matcher",
        ref_id: "db28bb4c-c771-11eb-8047-b025aa3e54c7",
        value: 0.2,
      },
      text: "match_2",
    },
    id: "dbc23f38-c771-11eb-85d7-b025aa3e54c7",
    position: {
      x: 900,
      y: 600,
    },
    type: "match",
  },
  {
    animated: true,
    id:
      "edge-dbc23f38-c771-11eb-85d7-b025aa3e54c7-db28bb4c-c771-11eb-8047-b025aa3e54c7",
    label: "match",
    labelBgBorderRadius: 4,
    labelBgPadding: [8, 4],
    labelBgStyle: {
      color: "#000000",
      fill: "rgb(51, 173, 173)",
      fillOpacity: 0.7,
    },
    source: "dbc23f38-c771-11eb-85d7-b025aa3e54c7",
    style: {
      stroke: "#009999",
    },
    target: "db28bb4c-c771-11eb-8047-b025aa3e54c7",
  },
  {
    data: {
      adjacency: 1,
      id: "dbc2423a-c771-11eb-85d7-b025aa3e54c7",
      mimeType: "text/plain",
      score: {
        description: "score for chunk",
        op_name: "chunk_matcher",
        ref_id: "db28bb4c-c771-11eb-8047-b025aa3e54c7",
        value: 0.3,
      },
      text: "match_3",
    },
    id: "dbc2423a-c771-11eb-85d7-b025aa3e54c7",
    position: {
      x: 1350,
      y: 600,
    },
    type: "match",
  },
  {
    animated: true,
    id:
      "edge-dbc2423a-c771-11eb-85d7-b025aa3e54c7-db28bb4c-c771-11eb-8047-b025aa3e54c7",
    label: "match",
    labelBgBorderRadius: 4,
    labelBgPadding: [8, 4],
    labelBgStyle: {
      color: "#000000",
      fill: "rgb(51, 173, 173)",
      fillOpacity: 0.7,
    },
    source: "dbc2423a-c771-11eb-85d7-b025aa3e54c7",
    style: {
      stroke: "#009999",
    },
    target: "db28bb4c-c771-11eb-8047-b025aa3e54c7",
  },
  {
    data: {
      granularity: 1,
      id: "db28c010-c771-11eb-8047-b025aa3e54c7",
      mimeType: "text/plain",
      parentId: "d82c8a86-c771-11eb-867e-b025aa3e54c7",
      text: "chunk_1",
    },
    id: "db28c010-c771-11eb-8047-b025aa3e54c7",
    position: {
      x: 500,
      y: 200,
    },
    type: "chunk",
  },
  {
    animated: false,
    id: "edge-db28c010-c771-11eb-8047-b025aa3e54c7-1",
    label: "chunk",
    labelBgBorderRadius: 4,
    labelBgPadding: [8, 4],
    labelBgStyle: {
      color: "#000000",
      fill: "rgb(51, 173, 173)",
      fillOpacity: 0.7,
    },
    source: "db28c010-c771-11eb-8047-b025aa3e54c7",
    style: {
      stroke: "#009999",
    },
    target: "1",
  },
  {
    data: {
      adjacency: 1,
      id: "dbc25464-c771-11eb-85d7-b025aa3e54c7",
      mimeType: "text/plain",
      score: {
        description: "score for chunk",
        op_name: "chunk_matcher",
        ref_id: "db28c010-c771-11eb-8047-b025aa3e54c7",
      },
      text: "match_0",
    },
    id: "dbc25464-c771-11eb-85d7-b025aa3e54c7",
    position: {
      x: 0,
      y: 800,
    },
    type: "match",
  },
  {
    animated: true,
    id:
      "edge-dbc25464-c771-11eb-85d7-b025aa3e54c7-db28c010-c771-11eb-8047-b025aa3e54c7",
    label: "match",
    labelBgBorderRadius: 4,
    labelBgPadding: [8, 4],
    labelBgStyle: {
      color: "#000000",
      fill: "rgb(51, 173, 173)",
      fillOpacity: 0.7,
    },
    source: "dbc25464-c771-11eb-85d7-b025aa3e54c7",
    style: {
      stroke: "#009999",
    },
    target: "db28c010-c771-11eb-8047-b025aa3e54c7",
  },
  {
    data: {
      adjacency: 1,
      id: "dbc257ac-c771-11eb-85d7-b025aa3e54c7",
      mimeType: "text/plain",
      score: {
        description: "score for chunk",
        op_name: "chunk_matcher",
        ref_id: "db28c010-c771-11eb-8047-b025aa3e54c7",
        value: 0.1,
      },
      text: "match_1",
    },
    id: "dbc257ac-c771-11eb-85d7-b025aa3e54c7",
    position: {
      x: 450,
      y: 800,
    },
    type: "match",
  },
  {
    animated: true,
    id:
      "edge-dbc257ac-c771-11eb-85d7-b025aa3e54c7-db28c010-c771-11eb-8047-b025aa3e54c7",
    label: "match",
    labelBgBorderRadius: 4,
    labelBgPadding: [8, 4],
    labelBgStyle: {
      color: "#000000",
      fill: "rgb(51, 173, 173)",
      fillOpacity: 0.7,
    },
    source: "dbc257ac-c771-11eb-85d7-b025aa3e54c7",
    style: {
      stroke: "#009999",
    },
    target: "db28c010-c771-11eb-8047-b025aa3e54c7",
  },
  {
    data: {
      adjacency: 1,
      id: "dbc25a86-c771-11eb-85d7-b025aa3e54c7",
      mimeType: "text/plain",
      score: {
        description: "score for chunk",
        op_name: "chunk_matcher",
        ref_id: "db28c010-c771-11eb-8047-b025aa3e54c7",
        value: 0.2,
      },
      text: "match_2",
    },
    id: "dbc25a86-c771-11eb-85d7-b025aa3e54c7",
    position: {
      x: 900,
      y: 800,
    },
    type: "match",
  },
  {
    animated: true,
    id:
      "edge-dbc25a86-c771-11eb-85d7-b025aa3e54c7-db28c010-c771-11eb-8047-b025aa3e54c7",
    label: "match",
    labelBgBorderRadius: 4,
    labelBgPadding: [8, 4],
    labelBgStyle: {
      color: "#000000",
      fill: "rgb(51, 173, 173)",
      fillOpacity: 0.7,
    },
    source: "dbc25a86-c771-11eb-85d7-b025aa3e54c7",
    style: {
      stroke: "#009999",
    },
    target: "db28c010-c771-11eb-8047-b025aa3e54c7",
  },
  {
    data: {
      adjacency: 1,
      id: "dbc25d60-c771-11eb-85d7-b025aa3e54c7",
      mimeType: "text/plain",
      score: {
        description: "score for chunk",
        op_name: "chunk_matcher",
        ref_id: "db28c010-c771-11eb-8047-b025aa3e54c7",
        value: 0.3,
      },
      text: "match_3",
    },
    id: "dbc25d60-c771-11eb-85d7-b025aa3e54c7",
    position: {
      x: 1350,
      y: 800,
    },
    type: "match",
  },
  {
    animated: true,
    id:
      "edge-dbc25d60-c771-11eb-85d7-b025aa3e54c7-db28c010-c771-11eb-8047-b025aa3e54c7",
    label: "match",
    labelBgBorderRadius: 4,
    labelBgPadding: [8, 4],
    labelBgStyle: {
      color: "#000000",
      fill: "rgb(51, 173, 173)",
      fillOpacity: 0.7,
    },
    source: "dbc25d60-c771-11eb-85d7-b025aa3e54c7",
    style: {
      stroke: "#009999",
    },
    target: "db28c010-c771-11eb-8047-b025aa3e54c7",
  },
]
