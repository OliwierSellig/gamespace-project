import styles from "./userInput.module.scss";

type UserInputProps = {
  label: string;
  maxCharacters: number;
  placeholder?: string;
  type?: { name: "text" } | { name: "textArea"; height: number };
  value: string;
  handleChange: (e: string) => void;
  additionalStyle?: object;
};

function UserInput({
  label = "Undefined Input",
  maxCharacters = 10,
  placeholder = "",
  type = { name: "text" },
  value,
  handleChange,
  additionalStyle = {},
}: UserInputProps) {
  return (
    <div style={additionalStyle} className={styles.container}>
      <label htmlFor={`${label.toLowerCase()}-input`} className={styles.label}>
        {label}
      </label>

      <div className={styles.box}>
        {type.name === "text" && (
          <input
            type="text"
            maxLength={maxCharacters}
            placeholder={placeholder}
            className={styles.input}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
          />
        )}
        {type.name === "textArea" && (
          <textarea
            style={{ minHeight: `${type.height}rem` }}
            className={styles.input}
            maxLength={maxCharacters}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
          />
        )}
        <span className={styles.max}>Max {maxCharacters} characters</span>
      </div>
    </div>
  );
}

export default UserInput;
