export type ConflictType = 'character' | 'timeline' | 'object' | 'worldRule';
export type Severity = 'low' | 'medium' | 'high';

export interface Project {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Version {
  id: string;
  projectId: string;
  label: string;
  uploadedAt: string;
  status: 'pending' | 'analyzing' | 'completed' | 'failed';
  fileName: string;
  wordCount: number;
}

export interface Conflict {
  id: string;
  projectId: string;
  versionId: string;
  type: ConflictType;
  severity: Severity;
  title: string;
  description: string;
  chapterA?: string;
  chapterB?: string;
  textA?: string;
  textB?: string;
  relatedCharacters: string[];
  status: 'open' | 'acknowledged' | 'resolved';
}

export interface Character {
  id: string;
  projectId: string;
  name: string;
  role?: string;
  description?: string;
  traits: string[];
}

export interface CharacterAppearance {
  id: string;
  characterId: string;
  versionId: string;
  chapter: string;
  summary: string;
  traitsSnapshot: string[];
  driftScore?: number;
  driftReason?: string;
}

export interface StoryNode {
  id: string;
  projectId: string;
  type: 'character' | 'object' | 'event' | 'location' | 'rule';
  label: string;
  summary?: string;
}

export interface StoryEdge {
  id: string;
  projectId: string;
  fromNodeId: string;
  toNodeId: string;
  relation: string;
}

export const mockProject: Project = {
  id: 'project-1',
  name: '《赤霄劍傳》劇本',
  description: '仙俠長篇劇本，圍繞靈劍「赤霄」與古老王朝的陰謀展開。',
  createdAt: '2025-02-10',
  updatedAt: '2025-03-01'
};

export const mockVersions: Version[] = [
  {
    id: 'v1-0',
    projectId: 'project-1',
    label: 'v1.0 初稿',
    uploadedAt: '2025-02-10',
    status: 'completed',
    fileName: 'chixiao_script_v1_0.docx',
    wordCount: 95000
  },
  {
    id: 'v1-1',
    projectId: 'project-1',
    label: 'v1.1 導演修訂',
    uploadedAt: '2025-02-20',
    status: 'completed',
    fileName: 'chixiao_script_v1_1.docx',
    wordCount: 98000
  },
  {
    id: 'v1-2',
    projectId: 'project-1',
    label: 'v1.2 補強世界觀',
    uploadedAt: '2025-03-01',
    status: 'completed',
    fileName: 'chixiao_script_v1_2.docx',
    wordCount: 102000
  }
];

export const mockConflicts: Conflict[] = [
  {
    id: 'c1',
    projectId: 'project-1',
    versionId: 'v1-2',
    type: 'object',
    severity: 'high',
    title: '「赤霄劍」持有者前後不一致',
    description:
      '第三章明確描寫赤霄劍由同伴雲逐帶回宗門保管，但第七章開頭主角卻直接持赤霄劍迎戰，未交代取回過程。',
    chapterA: '第三章・風雪歸宗',
    chapterB: '第七章・血戰山門',
    textA:
      '雲逐將赤霄劍插回劍匣，對眾人道：「此劍關乎宗門安危，由我暫為保管，列入禁庫。」',
    textB:
      '雷淵提劍立於山門之前，赤霄劍鳴聲震耳，他淡淡一笑：「有劍在手，何懼群敵。」',
    relatedCharacters: ['ch_leiyuan', 'ch_yunzhu'],
    status: 'open'
  },
  {
    id: 'c2',
    projectId: 'project-1',
    versionId: 'v1-2',
    type: 'timeline',
    severity: 'medium',
    title: '冬季章節錯置祭典時間',
    description:
      '第十章事件被註記為隆冬時節，卻引用第五章夏季舉行的「花神祭」作為「剛結束不久」的背景。',
    chapterA: '第五章・花神祭',
    chapterB: '第十章・冰封王城',
    textA: '盛夏夜風中，花神祭的花燈一盞接一盞亮起，城中滿是笑語與歌聲。',
    textB:
      '城牆上積雪未融，雷淵抬頭看向灰白的天空，心想：「花神祭剛過，卻已是這般冷得刺骨。」',
    relatedCharacters: ['ch_leiyuan'],
    status: 'open'
  },
  {
    id: 'c3',
    projectId: 'project-1',
    versionId: 'v1-2',
    type: 'character',
    severity: 'medium',
    title: '主角對密室會議的記憶不一致',
    description:
      '前文明確寫到雷淵參與密室會議並主導策略，後文卻以「首次得知」口吻描述同一事件。',
    chapterA: '第六章・密室之議',
    chapterB: '第十二章・真相碎片',
    textA:
      '雷淵敲了敲桌面，道：「情報既已確定，明日黎明前撤離南關，按計畫行事。」',
    textB:
      '「原來南關撤離竟是早有安排……」雷淵捏緊手中的報告，心底第一次對長老們的決策產生動搖。',
    relatedCharacters: ['ch_leiyuan'],
    status: 'acknowledged'
  }
];

export const mockCharacters: Character[] = [
  {
    id: 'ch_leiyuan',
    projectId: 'project-1',
    name: '雷淵',
    role: '主角',
    description: '出身邊境小城的散修，意外與赤霄劍產生共鳴，被捲入王朝權力漩渦。',
    traits: ['謹慎', '重義氣', '壓抑情緒', '善於觀察局勢']
  },
  {
    id: 'ch_yunzhu',
    projectId: 'project-1',
    name: '雲逐',
    role: '同伴 / 劍修',
    description: '宗門劍修天才，外冷內熱，負責暫時保管赤霄劍。',
    traits: ['理性', '自律', '行事果決']
  },
  {
    id: 'ch_qinshuang',
    projectId: 'project-1',
    name: '秦霜',
    role: '情報官',
    description: '王城密探頭目，掌握關鍵情報來源。',
    traits: ['機警', '善謊言', '情緒收斂']
  }
];

export const mockAppearances: CharacterAppearance[] = [
  {
    id: 'ca1',
    characterId: 'ch_leiyuan',
    versionId: 'v1-2',
    chapter: '第三章・風雪歸宗',
    summary: '在雲逐面前明確表達對宗門的戒心與保留。',
    traitsSnapshot: ['謹慎', '不輕信權威'],
    driftScore: 0.2
  },
  {
    id: 'ca2',
    characterId: 'ch_leiyuan',
    versionId: 'v1-2',
    chapter: '第十二章・真相碎片',
    summary: '對長老會決策完全信任，將所有判斷交給對方。',
    traitsSnapshot: ['盲目信任', '缺乏懷疑'],
    driftScore: 0.78,
    driftReason: '對權威態度在短時間內出現明顯反差，前後缺乏轉折鋪墊。'
  }
];

export const mockNodes: StoryNode[] = [
  {
    id: 'node_leiyuan',
    projectId: 'project-1',
    type: 'character',
    label: '雷淵',
    summary: '與赤霄劍產生共鳴的主角。'
  },
  {
    id: 'node_yunzhu',
    projectId: 'project-1',
    type: 'character',
    label: '雲逐',
    summary: '宗門劍修天才，暫時保管赤霄劍。'
  },
  {
    id: 'node_chixiao',
    projectId: 'project-1',
    type: 'object',
    label: '赤霄劍',
    summary: '能共鳴靈脈的古劍，為多數衝突核心物件。'
  },
  {
    id: 'node_meeting',
    projectId: 'project-1',
    type: 'event',
    label: '南關密室會議',
    summary: '決定撤離南關的重要會議。'
  }
];

export const mockEdges: StoryEdge[] = [
  {
    id: 'e1',
    projectId: 'project-1',
    fromNodeId: 'node_yunzhu',
    toNodeId: 'node_chixiao',
    relation: '暫時保管'
  },
  {
    id: 'e2',
    projectId: 'project-1',
    fromNodeId: 'node_leiyuan',
    toNodeId: 'node_chixiao',
    relation: '共鳴 / 正式持有'
  },
  {
    id: 'e3',
    projectId: 'project-1',
    fromNodeId: 'node_leiyuan',
    toNodeId: 'node_meeting',
    relation: '參與會議'
  }
];

