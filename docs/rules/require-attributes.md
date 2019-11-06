# require-attributes

Require specified `attributes` on specified `components` from being used.. This is useful for things such as:

- Requiring a `id` attribute on things used by automated tests
- Requiring attributs needed for SEO or a11y concerns

## Usage

This rule takes one object argument of type object that defines an associative array of `attributes` that that should be required on the defined array of `components` and a `reason` to be displayed for requiring the attribute.

```
{
  "rules": {
    "manage-attributes/require-attributes": [ 2, {
      "id": {
		"components": [ "a", "button", "input" ],
		"reason": "for automated tests"
	  }
    }]
  }
}
```

### Succeed

```jsx
<a id='my-id'></a>                  <!-- Good: id is provided-->
<input id='my-id'></input>          <!-- Good: id is provided-->
```

### Fail

```jsx
<a></a>                             <!-- Bad: id is missing-->
<button></button>                   <!-- Bad: id is missing-->
```
