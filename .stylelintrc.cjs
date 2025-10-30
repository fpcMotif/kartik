module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    // Allow Tailwind CSS at-rules
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "layer",
          "variants",
          "responsive",
          "screen",
          "plugin",
          "theme",
        ],
      },
    ],
    // Disable some formatting rules that conflict with Tailwind v4
    "import-notation": null,
    "value-keyword-case": null,
    "custom-property-pattern": null,
    "alpha-value-notation": null,
    "lightness-notation": null,
    "hue-degree-notation": null,
    "keyframes-name-pattern": null,
    "selector-class-pattern": null,
    "rule-empty-line-before": null,
    "comment-empty-line-before": null,
    "color-function-notation": null,
  },
};
