export type CommitType = {
  name: 'build' | 'ci' | 'docs' | 'feat' | 'fix' | 'perf' | 'refactor' | 'style' | 'test',
  description: string,
  emoji: Record<'unicode' | 'shortcode', string>,
};

export const commitTypes: CommitType[] = [
  {
    name: 'build',
    description: 'Changes that affect the build system or external dependencies',
    emoji: {
      shortcode: ':package:',
      unicode: '📦',
    }
  },
  {
    name: 'ci',
    description: 'Changes to our CI configuration files and scripts',
    emoji: {
      shortcode: ':construction_worker:',
      unicode: '👷‍♂',
    }
  },
  {
    name: 'docs',
    description: 'Documentation only changes',
    emoji: {
      shortcode: ':books:',
      unicode: '📚',
    }
  },
  {
    name: 'feat',
    description: 'A new feature',
    emoji: {
      shortcode: ':sparkles:',
      unicode: '✨',
    }
  },
  {
    name: 'fix',
    description: 'A bug fix',
    emoji: {
      shortcode: ':bug:',
      unicode: '🐛',
    }
  },
  {
    name: 'perf',
    description: 'A code change that improves performance',
    emoji: {
      shortcode: ':zap:',
      unicode: '⚡️',
    }
  },
  {
    name: 'refactor',
    description: 'A code change that neither fixes a bug nor adds a feature',
    emoji: {
      shortcode: ':recycle:',
      unicode: '♻️',
    }
  },
  {
    name: 'style',
    description: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    emoji: {
      shortcode: ':gem:',
      unicode: '💎',
    }
  },
  {
    name: 'test',
    description: 'Adding missing tests or correcting existing tests',
    emoji: {
      shortcode: ':rotating_light:',
      unicode: '🚨',
    }
  }
];
