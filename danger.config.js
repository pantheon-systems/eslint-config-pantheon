import { danger, message, warn } from 'danger';
import { gt } from 'semver';

/**
 * BEFORE EDITING THIS FILE, PLEASE READ https://danger.systems/js/usage/culture.html
 *
 * This file is split into two parts:
 * 1) Rules that reduce toil in the CR process
 * 2) Rules that celebrate achievements
 */

const changelog = danger.git.fileMatch('CHANGELOG.md');
const packageJson = danger.git.fileMatch('package.json');
const packageFiles = danger.git.fileMatch('**/*.{js}');

// ============================================================
// Procedural Rules
// ============================================================

/**
 * Rule: Ensure the PR title contains a Jira ticket key.
 * Reason: Ensures the connection is made with Jira to track ticket progress.
 * Severity: Warning
 */

const prTitle = danger.github.pr.title;
// Matches: [ADA-213] [var-99] [JFDI]
// Non-matches: 99 var99 ada-212
const jiraTicketPattern = /\[([a-zA-Z]+-\d+|JFDI)\]/gi;

if (!jiraTicketPattern.test(prTitle)) {
  warn(
    ':tickets: Jira ticket number seems to be missing from the PR title. Use format `[ADA-123]`. Your PM will thank you.',
  );
}

/**
 * Rule: Ensure CHANGELOG is updated when files in src/ are modified.
 * Reason: Keep our CHANGELOG up to date.
 * Severity: Warning
 */
if (packageFiles.modified && !changelog.modified) {
  warn(
    ":page_facing_up: Changes made to component source, but CHANGELOG hasn't been updated.",
  );
}

// ============================================================
// Celebratory Rules
// ============================================================

/**
 * Rule: Celebrate when a new version is released.
 * Reason: Progress!
 */
if (packageJson.modified) {
  danger.git.JSONDiffForFile('package.json').then(({ version }) => {
    if (!version) return;

    if (gt(version.after, version.before)) {
      message(':tada: Yay! A new version!');
    }
  });
}

/**
 * Rule: Celebrate PRs that remove more code than they add.
 * Reason: Less is more!
 */
if (danger.github.pr.deletions > danger.github.pr.additions) {
  message(
    ':clap: Great job! There are more lines deleted than added. Thanks for keeping us lean!',
  );
}
