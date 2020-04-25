export type CommitType = {
  name: 'build' | 'ci' | 'docs' | 'feat' | 'fix' | 'perf' | 'refactor' | 'style' | 'test',
  description: string,
  emoji: Record<'unicode' | 'shortcode', string>,
};